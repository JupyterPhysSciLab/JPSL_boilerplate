define([
    "require",
    "./snippets_submenus_JPSL/instructor",
    "./snippets_submenus_JPSL/Jupyter_Pandas_GUI",
    "./snippets_submenus_JPSL/JupyterPiDAQ",
], function (require, instructor, pandasGUI, JupyterPiDAQ) {
    return {
        instructor:instructor,
        pandasGUI:pandasGUI,
        JupyterPiDAQ:JupyterPiDAQ,
    };
});
