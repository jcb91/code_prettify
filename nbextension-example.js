/**
 * This file provides an example nbextension using the kernel_exec_on_cells library
 * and is taken from
 *     https://github.com/ipython-contrib/jupyter_contrib_nbextensions/blob/db0fccc6dc3f4302f7fe62296e4c9bc46a728226/src/jupyter_contrib_nbextensions/nbextensions/code_prettify/autopep8.js
 */

// Copyright (c) Jupyter-Contrib Team.
// Distributed under the terms of the Modified BSD License.
// Authors: @kenkoooo, @jfbercher and @jcb91

define(['./kernel_exec_on_cell'], function(kernel_exec_on_cell) {
    'use strict';

    var mod_name = 'autopep8';

    // gives default settings
    var cfg = {
        add_toolbar_button: true,
        hotkeys: {
            process_selected: 'Alt-A',
            process_all: 'Alt-Shift-A',
        },
        register_hotkey: true,
        show_alerts_for_errors: true,
        button_icon: 'fa-cog',
        button_label: 'Prettify (using autopep8)',
        kbd_shortcut_text: 'Prettify' // ' current cell(s)'
    };

    cfg.kernel_config_map = { // map of parameters for supported kernels
        "python": {
            "library": "import json\nimport autopep8",
            "prefix": "print(json.dumps(autopep8.fix_code(u",
            "postfix": ")))"
        }
    };

    var prettifier = new kernel_exec_on_cell.define_plugin(mod_name, cfg);
    prettifier.load_ipython_extension = prettifier.initialize_plugin;
    return prettifier;
});
