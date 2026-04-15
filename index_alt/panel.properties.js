(function () {
    const GLOBAL_PROP_TEMPLATE = Array.isArray(window.GLOBAL_PROP_TEMPLATE)
        ? structuredClone(window.GLOBAL_PROP_TEMPLATE)
        : [];

    const BUILTIN_PROP_TEMPLATES = (
        window.BUILTIN_PROP_TEMPLATES &&
        typeof window.BUILTIN_PROP_TEMPLATES === "object"
    )
        ? window.BUILTIN_PROP_TEMPLATES
        : {
            default: [],
            Linien: [],
            Hauptgleis: [],
            Nebengleis: [],
            "Nb-Grenze": [],
            "StB-Grenze": [],
            Kilometrierung: [],
            Gemeinschaftskabeltrasse: [],
            "LST Kabeltrasse": [],
            Fernmeldekabeltrasse: [],
            Rangierweg: [],
            Fahrweg: [],
            "Sonstiger Weg": [],
            Hilfsweg: [],
            Betriebsgleis: []
        };
    function getPropertiesPanel() {
        return window.propertiesPanel;
    }

    function getPropsBody() {
        return window.propsBody;
    }

    function getPropsActiveTab() {
        return window.propsActiveTab;
    }

    function setPropsActiveTab(value) {
        window.propsActiveTab = value;
    }

    function getCustomPropTemplates() {
        return window.customPropTemplates;
    }

    function setCustomPropTemplates(value) {
        window.customPropTemplates = value;
    }

    function getSelectedElementIndex() {
        return window.selectedElementIndex;
    }

    function getSelectedLineIndex() {
        return window.selectedLineIndex;
    }

    function getSavedElements() {
        return window.savedElements;
    }

    function getSavedLines() {
        return window.savedLines;
    }

    // Hilfsfunktionen: aktuelle Auswahl robust holen
    function getSelectedModel() {
        const selectedElementIndex = getSelectedElementIndex();
        const selectedLineIndex = getSelectedLineIndex();
        const savedElements = getSavedElements();
        const savedLines = getSavedLines();

        if (window.selectedElementIndex !== null) {
            const el = window.savedElements[window.selectedElementIndex];
            return { kind: "element", el };
        }
        if (window.selectedLineIndex !== null) {
            const line = window.savedLines[window.selectedLineIndex];
            return { kind: "line", line };
        }
        return { kind: "none" };
    }

    function initPropertiesPanelDelegation() {
        const propsBody = getPropsBody();
        if (!propsBody || propsBody.__delegationWired) return;
        propsBody.__delegationWired = true;

        // Tabs (merken + umschalten)
        propsBody.addEventListener("click", (e) => {
            const tabBtn = e.target.closest(".props-tab");
            if (!tabBtn) return;

            const t = tabBtn.dataset.tab;
            if (!t) return;
            setPropsActiveTab(t);

            const root = propsBody;
            root.querySelectorAll(".props-tab").forEach(b =>
                b.classList.toggle("is-active", b === tabBtn)
            );
            root.querySelectorAll(".props-pane").forEach(p =>
                p.classList.toggle("is-active", p.dataset.pane === t)
            );
        });

        // Element-Felder: Inputs (Label/Value) + Delete via data-action
        propsBody.addEventListener("input", (e) => {
            const t = e.target;
            if (!t?.matches?.("[data-kind][data-idx]")) return;

            const sel = getSelectedModel();
            const model = sel.kind === "element" ? sel.el : sel.kind === "line" ? sel.line : null;
            if (!model) return;

            if (sel.kind === "element") ensureElementProps(model);
            if (sel.kind === "line") ensureLineProps(model);

            const idx = Number(t.dataset.idx);
            if (!Number.isFinite(idx) || !model.propsPanel.fields?.[idx]) return;

            window.beginPropsHistory();

            const fk = t.dataset.kind;
            if (fk === "label") model.propsPanel.fields[idx].label = t.value;
            if (fk === "value") model.propsPanel.fields[idx].value = t.value;

            // Optional: live redraw (meist nicht nötig)
            // redrawCanvas();
        });

        propsBody.addEventListener("click", (e) => {
            const btn = e.target.closest("[data-action]");
            if (!btn) return;

            const action = btn.dataset.action;

            // --- Element-Kontext ---
            const sel = getSelectedModel();

            if (action === "delete-field") {
                const model = sel.kind === "element" ? sel.el : sel.kind === "line" ? sel.line : null;
                if (!model) return;

                const idx = Number(btn.dataset.idx);
                if (!Number.isFinite(idx)) return;

                window.beginPropsHistory();
                model.propsPanel.fields.splice(idx, 1);
                renderPropertiesForSelection(true);
                window.commitPropsHistory("delete property field");
                return;
            }

            if (action === "add-field") {
                const model = sel.kind === "element" ? sel.el : sel.kind === "line" ? sel.line : null;
                if (!model) return;

                if (sel.kind === "element") ensureElementProps(model);
                if (sel.kind === "line") ensureLineProps(model);

                window.beginPropsHistory();
                model.propsPanel.fields.push({
                    id: `fld_${Date.now()}_${Math.random().toString(16).slice(2)}`,
                    label: "Neues Feld",
                    type: "text",
                    value: ""
                });
                renderPropertiesForSelection(true);
                window.commitPropsHistory("add property field");
                return;
            }

            if (action === "reset-template") {
                if (sel.kind !== "element" || !sel.el) return;

                window.beginPropsHistory();

                const cat = sel.el.propsPanel?.category || getAutoCategoryForElement(sel.el);
                const effective = getEffectiveTemplate(cat);

                // bestehende Werte nach ID merken
                const byId = new Map((sel.el.propsPanel.fields || []).map(f => [f.id, f]));

                // Template-Struktur übernehmen, Werte behalten (wo vorhanden)
                sel.el.propsPanel.fields = effective.map(def => {
                    const existing = byId.get(def.id);
                    return existing
                        ? { ...structuredClone(def), value: existing.value }
                        : structuredClone(def);
                });

                renderPropertiesForSelection(true);
                window.commitPropsHistory("sync property template");
                return;
            }

            // --- Kategorie-Manager ---
            if (action === "create-cat") {
                const nameInput = propsBody.querySelector("#prop-new-cat-name");
                const name = (nameInput?.value || "").trim();
                if (!name) return alert("Bitte einen Kategorienamen eingeben.");
                if (BUILTIN_PROP_TEMPLATES[name]) return alert("Dieser Name ist reserviert (Built-in).");
                if (window.customPropTemplates[name]) return alert("Kategorie existiert bereits.");

                window.beginPropsHistory();
                window.customPropTemplates[name] = deepClone(BUILTIN_PROP_TEMPLATES.default);
                renderPropertiesForSelection(true);
                window.commitPropsHistory("create property category");
                return;
            }

            if (action === "delete-cat") {
                const manageSel = propsBody.querySelector("#prop-manage-cat");
                const cat = manageSel?.value;
                if (!cat) return alert("Bitte eine eigene Kategorie auswählen.");
                if (!window.customPropTemplates[cat]) return alert("Kann nur eigene Kategorien löschen.");

                window.beginPropsHistory();
                delete window.customPropTemplates[cat];

                window.savedElements.forEach(el => {
                    if (el?.propsPanel?.category === cat) el.propsPanel.category = null;
                });

                renderPropertiesForSelection(true);
                window.commitPropsHistory("delete property category");
                return;
            }

            if (action === "add-template-field") {
                const manageSel = propsBody.querySelector("#prop-manage-cat");
                const cat = manageSel?.value;
                if (!cat || !window.customPropTemplates[cat]) return alert("Bitte eine eigene Kategorie auswählen.");

                window.beginPropsHistory();
                window.customPropTemplates[cat].push({
                    id: `tpl_${Date.now()}_${Math.random().toString(16).slice(2)}`,
                    label: "Neues Vorlagenfeld",
                    type: "text",
                    value: ""
                });
                renderPropertiesForSelection(true);
                window.commitPropsHistory("add template field");
                return;
            }

            if (action === "delete-template-field") {
                const manageSel = propsBody.querySelector("#prop-manage-cat");
                const cat = manageSel?.value;
                if (!cat || !window.customPropTemplates[cat]) return;

                const idx = Number(btn.dataset.idx);
                if (!Number.isFinite(idx)) return;

                window.beginPropsHistory();
                window.customPropTemplates[cat].splice(idx, 1);
                renderPropertiesForSelection(true);
                window.commitPropsHistory("delete template field");
                return;
            }
        });

        // Selects: Kategorie wechseln + Template-Manager Kategorie wechseln + Template-Feld-Typ ändern
        propsBody.addEventListener("change", (e) => {
            const t = e.target;

            // Element-Kategorie
            if (t?.id === "prop-el-category") {
                const sel = getSelectedModel();
                if (sel.kind !== "element" || !sel.el) return;

                window.beginPropsHistory();
                sel.el.propsPanel = sel.el.propsPanel || { category: null, fields: [] };
                sel.el.propsPanel.category = t.value;

                // Felder mit Template „auffüllen“ / konsolidieren
                ensureElementProps(sel.el);

                renderPropertiesForSelection(true);
                window.commitPropsHistory("change property category");
                return;
            }

            if (t?.id === "prop-line-category") {
                const sel = getSelectedModel();
                if (sel.kind !== "line" || !sel.line) return;

                window.beginPropsHistory();
                sel.line.propsPanel = sel.line.propsPanel || { category: null, fields: [] };
                sel.line.propsPanel.category = t.value === "__auto__" ? null : t.value;

                ensureLineProps(sel.line);

                renderPropertiesForSelection(true);
                window.commitPropsHistory("change line property category");
                return;
            }

            // Template-Manager: Kategorie wählen
            if (t?.id === "prop-manage-cat") {
                renderTemplateEditor(t.value);
                return;
            }

            // Template-Editor Felder (label/type/value)
            if (t?.matches?.("[data-kind][data-idx]") && t.closest("#prop-template-fields")) {
                const manageSel = propsBody.querySelector("#prop-manage-cat");
                const cat = manageSel?.value;
                if (!cat || !window.customPropTemplates[cat]) return;

                const idx = Number(t.dataset.idx);
                if (!Number.isFinite(idx) || !window.customPropTemplates[cat][idx]) return;

                window.beginPropsHistory();
                const f = window.customPropTemplates[cat][idx];
                const k = t.dataset.kind;
                if (k === "label") f.label = t.value;
                if (k === "type") f.type = t.value;
                if (k === "value") f.value = t.value;

                renderPropertiesForSelection(true);
                window.commitPropsHistory("edit template");
                return;
            }
        });

        // Commit: wenn Panel-Fokus verlassen wird
        propsBody.addEventListener("focusout", () => {
            setTimeout(() => window.commitPropsHistory("edit properties"), 0);
        }, true);
    }

    function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

    function mergeTemplates(...templates) {
        const byId = new Map();
        for (const tpl of templates) {
            for (const f of tpl) byId.set(f.id, f); // später überschreibt früher
        }
        return Array.from(byId.values());
    }

    function getAllPropCategories() {
        const builtIn = Object.keys(BUILTIN_PROP_TEMPLATES || {});
        const custom = Object.keys(window.customPropTemplates || {});
        // default ans Ende (optisch)
        const all = [...new Set([...builtIn, ...custom])];
        all.sort((a, b) => {
            if (a === "default") return 1;
            if (b === "default") return -1;
            return a.localeCompare(b, "de");
        });
        return all;
    }

    function getTemplateForCategory(catName) {
        if (window.customPropTemplates?.[catName]) return window.customPropTemplates[catName];
        if (BUILTIN_PROP_TEMPLATES?.[catName]) return BUILTIN_PROP_TEMPLATES[catName];
        return BUILTIN_PROP_TEMPLATES?.default || [];
    }
    function getEffectiveTemplate(catName) {
        const globalTemplate = Array.isArray(window.GLOBAL_PROP_TEMPLATE)
            ? window.GLOBAL_PROP_TEMPLATE
            : [];

        return mergeTemplates(
            globalTemplate,
            getTemplateForCategory(catName)
        );
    }

    function getAutoCategoryForLine(line) {
        if (!line) return "Linien";

        const map = {
            hauptgleis: "Hauptgleis",
            nebengleis: "Nebengleis",
            linie_nb: "Nb-Grenze",
            linie_stb: "StB-Grenze",
            linie_km: "Kilometrierung",
            linie_gkt: "Gemeinschaftskabeltrasse",
            linie_lstk: "LST Kabeltrasse",
            linie_fmkt: "Fernmeldekabeltrasse",
            linie_pink: "Rangierweg",
            linie_gruen: "Fahrweg",
            linie_grau: "Sonstiger Weg",
            linie_gelb: "Hilfsweg",
            linie_zugb: "Betriebsgleis"
        };

        return map[line.type] || "Linien";
    }

    function getPaletteCategoryLabelForLine(line) {
        return getAutoCategoryForLine(line);
    }

    function ensureLineProps(line) {
        if (!line) return;
        if (!line.propsPanel) line.propsPanel = { category: null, fields: [] };

        const cat = line.propsPanel.category || getAutoCategoryForLine(line);
        const effective = getEffectiveTemplate(cat);
        const existingById = new Map((line.propsPanel.fields || []).map(f => [f.id, f]));

        for (const def of effective) {
            if (!existingById.has(def.id)) {
                line.propsPanel.fields.push(structuredClone(def));
            } else {
                const current = existingById.get(def.id);
                current.label = def.label;
                current.type = def.type;
                if (def.options) current.options = def.options;
                if (def.group) current.group = def.group;
            }
        }
    }

    /** ermittelt Element-Kategorie/Subkategorie */
    function getAutoCategoryForElement(el) {
        const finder = window.findCategoryAndSubcategoryByElementId;
        if (typeof finder !== "function") return "default";

        const { category, subcategory } = finder(el.id) || {};
        if (subcategory && ((window.customPropTemplates && window.customPropTemplates[subcategory]) || BUILTIN_PROP_TEMPLATES[subcategory])) {
            return subcategory;
        }
        return category || "default";
    }

    function ensureElementProps(el) {
        if (!el) return;
        if (!el.propsPanel) el.propsPanel = { category: null, fields: [] };

        const cat = el.propsPanel.category || getAutoCategoryForElement(el);
        const effective = getEffectiveTemplate(cat);
        const existingById = new Map((el.propsPanel.fields || []).map(f => [f.id, f]));

        for (const def of effective) {
            if (!existingById.has(def.id)) {
                el.propsPanel.fields.push(structuredClone(def));
            } else {
                const current = existingById.get(def.id);
                current.label = def.label;
                current.type = def.type;
                if (def.options) current.options = def.options;
                if (def.group) current.group = def.group;
            }
        }
    }

    function getPaletteCategoryLabelForElement(el) {
        const { category, subcategory } = window.findCategoryAndSubcategoryByElementId(el.id);
        const cleanCategory = (category || "default").replace(/^\[\d+\]\s*/, "").trim();

        if (subcategory) return `${cleanCategory} → ${subcategory}`;
        return cleanCategory;
    }

    function escapeHtml(s) {
        return String(s ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    // -----------------------------
    // Text-Panel Bindung (rechte Eigenschaften)
    // Überschreibt Handler (keine Listener-Stapelung)
    // -----------------------------
    function bindTextPanel(el) {
        if (!el || !(el.type === "text" || el.type === "text_box")) return;

        const ta = document.getElementById("prop-text-value");
        const size = document.getElementById("prop-text-size");
        const col = document.getElementById("prop-text-color");
        const bBold = document.getElementById("prop-text-bold");
        const bIt = document.getElementById("prop-text-italic");
        const align = document.getElementById("prop-text-align");
        if (!ta) return;

        ta.value = el.text ?? "";
        if (size) size.value = (el.fontSize ?? 5);
        if (col) col.value = (el.type === "text_box"
            ? (el.textColor || el.color || "#000000")
            : (el.color || "#000000"));
        if (bBold) bBold.classList.toggle("is-active", el.fontWeight === "bold");
        if (bIt) bIt.classList.toggle("is-active", el.fontStyle === "italic");
        if (align) align.value = (el.align || "center");

        let editOpen = false;
        const beginOnce = () => { if (!editOpen) { window.beginPropsHistory(); editOpen = true; } };
        const commit = (label) => { if (editOpen) { window.commitPropsHistory(label); editOpen = false; } };

        const redraw = () => window.redrawCanvas();

        // Rahmen: beim Tippen/Fokus Gruppe als "aktiv" markieren, beim Ende ausschalten
        ta.onfocus = () => {
            if (el.parentId) window.activeEditingGroupId = el.parentId;
            redraw();
        };
        ta.onkeydown = (e) => {
            if (e.key === "Escape") {
                ta.blur();
            }
        };

        ta.oninput = () => {
            beginOnce();
            el.text = ta.value;
            redraw();
        };
        ta.onblur = () => {
            commit("edit text");
            window.activeEditingGroupId = null;
            redraw();
        };

        if (size) {
            size.oninput = () => {
                beginOnce();
                const v = parseFloat(size.value);
                if (!Number.isNaN(v)) el.fontSize = v;
                redraw();
            };
            size.onblur = () => commit("edit text style");
        }

        if (col) {
            col.oninput = () => {
                beginOnce();
                if (el.type === "text_box") {
                    el.textColor = col.value;
                } else {
                    el.color = col.value;
                }
                redraw();
            };
            col.onblur = () => commit("edit text color");
        }

        if (bBold) {
            bBold.onclick = () => {
                beginOnce();
                el.fontWeight = (el.fontWeight === "bold") ? "normal" : "bold";
                bBold.classList.toggle("is-active", el.fontWeight === "bold");
                redraw();
            };
        }

        if (bIt) {
            bIt.onclick = () => {
                beginOnce();
                el.fontStyle = (el.fontStyle === "italic") ? "normal" : "italic";
                bIt.classList.toggle("is-active", el.fontStyle === "italic");
                redraw();
            };
        }

        if (align) {
            align.oninput = () => {
                beginOnce();
                el.align = (align.value || "center");
                redraw();
            };
            align.onblur = () => commit("edit text alignment");
            align.onchange = () => {
                beginOnce();
                el.align = (align.value || "center");
                redraw();
                commit("edit text alignment");
            };
        }
    }

    function createTextEditor(el) {
        // Element index setzen (falls nur Referenz übergeben wurde)
        const idx = window.savedElements.indexOf(el);
        if (idx !== -1) window.selectedElementIndex = idx;
        window.selectedLineIndex = null;

        window.propsActiveTab = "fields";
        window.propsOpenByUser = true;
        window.openPropertiesPanel();
        renderPropertiesForSelection(true);

        // Fokus auf Textfeld im Panel (nach Render)
        requestAnimationFrame(() => {
            const ta = document.getElementById("prop-text-value");
            if (ta) {
                ta.focus({ preventScroll: true });
                // Cursor ans Ende
                try { ta.setSelectionRange(ta.value.length, ta.value.length); } catch (e) { }
            }
        });
    }

    function renderTemplateEditor(cat) {
        const tplWrap = document.getElementById("prop-template-fields");
        if (!tplWrap) return;

        if (!cat) {
            tplWrap.innerHTML = `<div class="prop-muted">Wähle eine Kategorie zum Bearbeiten.</div>`;
            return;
        }
        if (!window.customPropTemplates[cat]) {
            tplWrap.innerHTML = `<div class="prop-muted">Built-in Kategorien sind hier nicht editierbar. Lege eine eigene Kategorie an.</div>`;
            return;
        }

        const rows = window.customPropTemplates[cat].map((f, idx) => {
            const typeOptions = ["text", "number", "textarea", "date"].map(t =>
                `<option value="${t}"${f.type === t ? " selected" : ""}>${t}</option>`
            ).join("");

            const valueControl = (f.type === "textarea")
                ? `<textarea class="props-control" data-kind="value" data-idx="${idx}" rows="2">${escapeHtml(f.value ?? "")}</textarea>`
                : `<input class="props-control" data-kind="value" data-idx="${idx}"
               type="${f.type === "number" ? "number" : (f.type === "date" ? "date" : "text")}"
               value="${escapeHtml(f.value ?? "")}">`;

            return `
      <div class="tpl-field">
        <div class="tpl-row2">
          <input class="props-control" data-kind="label" data-idx="${idx}" type="text"
                 value="${escapeHtml(f.label ?? "")}" placeholder="Label">
          <select class="props-control" data-kind="type" data-idx="${idx}">
            ${typeOptions}
          </select>
        </div>

        <div class="tpl-row3">
          ${valueControl}
        </div>

        <div class="tpl-actions">
          <button class="props-btn props-btn--danger" type="button"
                  data-action="delete-template-field" data-idx="${idx}" title="Feld löschen">✕</button>
        </div>
      </div>
    `;
        }).join("");

        tplWrap.innerHTML = rows || `<div class="prop-muted">Keine Vorlagenfelder.</div>`;
    }
    function renderPropsShell({ titleLeft = "", titleRight = "", activeTab = "fields" } = {}) {
        const isFields = activeTab !== "templates";
        const isTemplates = activeTab === "templates";

        return `
      <div class="props-shell">
        <div class="props-tabs">
          <button
            type="button"
            class="props-tab ${isFields ? "is-active" : ""}"
            data-tab="fields"
          >
            Eigenschaften
          </button>
          <button
            type="button"
            class="props-tab ${isTemplates ? "is-active" : ""}"
            data-tab="templates"
          >
            Vorlagen
          </button>
        </div>

        <div class="props-pane ${isFields ? "is-active" : ""}" data-pane="fields"></div>
        <div class="props-pane ${isTemplates ? "is-active" : ""}" data-pane="templates"></div>
      </div>
    `;
    }


    function renderPropertiesForSelection(forceOpen = false) {
        const propertiesPanel = getPropertiesPanel();
        const propsBody = getPropsBody();
        if (!propertiesPanel || !propsBody) return;

        if (window.selectedElementIndex === null && window.selectedLineIndex === null) {
            window.closePropertiesPanel();
            return;
        }

        if (forceOpen || propertiesPanel.hidden) {
            window.openPropertiesPanel();
        }
        // Panel öffnen, wenn erzwungen (Doppelklick) oder schon vom User offen
        if (forceOpen) window.openPropertiesPanel();
        else if (window.propsOpenByUser) window.openPropertiesPanel();

        // Linie ausgewählt → minimal anzeigen (optional)
        if (window.selectedLineIndex !== null && window.selectedElementIndex === null) {
            const line = window.savedLines[window.selectedLineIndex];
            ensureLineProps(line);

            const autoCat = getAutoCategoryForLine(line);
            const effectiveCat = line.propsPanel.category || autoCat;
            const paletteLabel = getPaletteCategoryLabelForLine(line);

            const categoryOptions = [
                `<option value="__auto__"${!line.propsPanel.category ? " selected" : ""}>${escapeHtml(autoCat)}</option>`,
                ...getAllPropCategories().map(c =>
                    `<option value="${escapeHtml(c)}"${(line.propsPanel.category === c) ? " selected" : ""}>${escapeHtml(c)}</option>`
                )
            ].join("");

            propsBody.innerHTML = renderPropsShell({
                titleLeft: "",
                titleRight: "",
                activeTab: window.propsActiveTab
            });

            const paneFields = propsBody.querySelector('[data-pane="fields"]');
            const paneTemplates = propsBody.querySelector('[data-pane="templates"]');

            paneFields.innerHTML = `
    <div class="prop-muted">Linientyp: <b>${escapeHtml(paletteLabel)}</b></div>

    <div class="props-section">
      <div class="props-section__title">Eigenschaftenvorlage</div>

      <div class="props-row props-row--inline">
        <label class="props-label" for="prop-line-category">Kategorie</label>
        <select id="prop-line-category" class="props-control">${categoryOptions}</select>

        <button class="props-btn" type="button" data-action="add-field">Feld +</button>
      </div>
    </div>

    <div class="props-section">
      <div class="props-section__title">Eigenschaften</div>
      <div id="prop-fields" class="props-fields">
        ${renderFieldRows(line.propsPanel.fields)}
      </div>
    </div>
  `;

            paneTemplates.innerHTML = `
    <div class="props-section">
      <div class="props-section__title">Vorlagen & Kategorien</div>
      ${renderCategoryManagerHTML()}
    </div>
  `;

            function renderFieldRows(fields) {
                if (!fields || !fields.length) return `<div class="prop-muted">Keine Felder.</div>`;
                return fields.map((f, idx) => renderFieldRowHTML(f, idx)).join("");
            }

            function renderFieldRowHTML(field, idx) {
                const valueControl = `
      <textarea class="props-control" data-kind="value" data-idx="${idx}" rows="2"
                placeholder="Wert...">${escapeHtml(field.value ?? "")}</textarea>
    `;

                return `
      <div class="props-field">
        <div class="props-field__head">
          <input class="props-control" data-kind="label" data-idx="${idx}" type="text"
                 value="${escapeHtml(field.label ?? "")}" placeholder="Label">
          <button class="props-btn props-btn--danger" type="button"
                  data-action="delete-field" data-idx="${idx}" title="Feld löschen">✕</button>
        </div>
        <div class="props-field__value">
          ${valueControl}
        </div>
      </div>
    `;
            }

            return;
        }

        // Element ausgewählt
        const el = window.savedElements[window.selectedElementIndex];
        if (!el || !el.id) {
            propsBody.innerHTML = `<div class="prop-muted">Kein Element.</div>`;
            return;
        }

        ensureElementProps(el);

        const autoCat = getAutoCategoryForElement(el);
        const effectiveCat = el.propsPanel.category || autoCat;
        const paletteLabel = getPaletteCategoryLabelForElement(el);

        // Optionen: Auto + alle
        const categoryOptions = [
            `<option value="__auto__"${!el.propsPanel.category ? " selected" : ""}>${escapeHtml(autoCat)}</option>`,
            ...getAllPropCategories().map(c =>
                `<option value="${escapeHtml(c)}"${(el.propsPanel.category === c) ? " selected" : ""}>${escapeHtml(c)}</option>`
            )
        ].join("");

        // Shell + Tabs
        propsBody.innerHTML = renderPropsShell({
            titleLeft: "",
            titleRight: "",
            activeTab: getPropsActiveTab()
        });

        const paneFields = propsBody.querySelector('[data-pane="fields"]');
        const paneTemplates = propsBody.querySelector('[data-pane="templates"]');

        paneFields.innerHTML = `
  <div class="prop-muted">Palette: <b>${escapeHtml(paletteLabel)}</b></div>

  <div class="props-section">
    <div class="props-section__title">Eigenschaftenvorlage</div>

    <div class="props-row props-row--inline">
      <label class="props-label" for="prop-el-category">Kategorie</label>
      <select id="prop-el-category" class="props-control">${categoryOptions}</select>

      <button class="props-btn" type="button" data-action="add-field">Feld +</button>
    </div>
  </div>

  <div class="props-section">
    <div class="props-section__title">Eigenschaften</div>
    <div id="prop-fields" class="props-fields">
      ${renderFieldRows(el.propsPanel.fields)}
    </div>
  </div>
`;

        // Text-Editing: Section dynamisch ergänzen (keine Canvas-Overlays mehr)
        if (el.type === "text" || el.type === "text_box") {
            paneFields.insertAdjacentHTML("beforeend", `
  <div class="props-section">
    <div class="props-section__title">Text bearbeiten</div>

    <div class="props-row">
      <label class="props-label" for="prop-text-value">Text</label>
      <textarea id="prop-text-value" class="props-control" rows="5" spellcheck="false"></textarea>
    </div>

    <div class="props-row props-row--inline">
      <label class="props-label" for="prop-text-size">Größe</label>
      <input id="prop-text-size" class="props-control" type="number" min="1" step="0.5" />
    </div>

    <div class="props-row props-row--inline">
      <label class="props-label" for="prop-text-color">Farbe</label>
      <input id="prop-text-color" class="props-control" type="color" />
    </div>

    <div class="props-row props-row--inline">
      <span class="props-label">Stil</span>
      <div class="props-inline-actions">
        <button type="button" class="props-btn" id="prop-text-bold">B</button>
        <button type="button" class="props-btn" id="prop-text-italic"><i>I</i></button>
      </div>
    </div>
    <div class="props-row props-row--inline">
      <label class="props-label" for="prop-text-align">Ausrichtung</label>
      <select id="prop-text-align" class="props-control">
        <option value="left">Linksbündig</option>
        <option value="center">Zentriert</option>
        <option value="right">Rechtsbündig</option>
      </select>
    </div>
  </div>
`);
        }

        // Eingaben im rechten Panel mit Element verbinden
        bindTextPanel(el);

        paneTemplates.innerHTML = `
  <div class="props-section">
    <div class="props-section__title">Vorlagen & Kategorien</div>
    ${renderCategoryManagerHTML()}
  </div>
`;

        function renderFieldRows(fields) {
            if (!fields || !fields.length) return `<div class="prop-muted">Keine Felder.</div>`;
            return fields.map((f, idx) => renderFieldRowHTML(f, idx)).join("");
        }

        function renderFieldRowHTML(field, idx) {
            const valueControl = `
    <textarea class="props-control" data-kind="value" data-idx="${idx}" rows="2"
              placeholder="Wert...">${escapeHtml(field.value ?? "")}</textarea>
  `;

            return `
    <div class="props-field">
      <div class="props-field__head">
        <input class="props-control" data-kind="label" data-idx="${idx}" type="text"
               value="${escapeHtml(field.label ?? "")}" placeholder="Label">
        <button class="props-btn props-btn--danger" type="button"
                data-action="delete-field" data-idx="${idx}" title="Feld löschen">✕</button>
      </div>
      <div class="props-field__value">
        ${valueControl}
      </div>
    </div>
  `;
        }
    }

    function isTypingTarget(el) {
        return !!(el && (el.matches("input,textarea,select") || el.isContentEditable));
    }

    window.getSelectedModel = getSelectedModel;
    window.initPropertiesPanelDelegation = initPropertiesPanelDelegation;
    window.deepClone = deepClone;
    window.mergeTemplates = mergeTemplates;
    window.getAllPropCategories = getAllPropCategories;
    window.getTemplateForCategory = getTemplateForCategory;
    window.getEffectiveTemplate = getEffectiveTemplate;
    window.getAutoCategoryForLine = getAutoCategoryForLine;
    window.getPaletteCategoryLabelForLine = getPaletteCategoryLabelForLine;
    window.ensureLineProps = ensureLineProps;
    window.getAutoCategoryForElement = getAutoCategoryForElement;
    window.ensureElementProps = ensureElementProps;
    window.escapeHtml = escapeHtml;
    window.bindTextPanel = bindTextPanel;
    window.createTextEditor = createTextEditor;
    window.renderTemplateEditor = renderTemplateEditor;
    window.renderPropertiesForSelection = renderPropertiesForSelection;
    window.isTypingTarget = isTypingTarget;
})();