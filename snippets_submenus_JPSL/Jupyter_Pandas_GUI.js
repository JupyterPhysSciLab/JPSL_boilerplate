define([
    "require",
], function (require) {
    return {
        'name' : 'Jupyter Pandas GUIs',
        'sub-menu' : [
            {
                'name' : 'Initialize GUIs',
                'snippet' : [
                    'from pandas_GUI import *',
                ],
            },
            {
                'name' : 'Documentation',
                'external-link' : 'https://github.com/JupyterPhysSciLab/jupyter_Pandas_GUI/blob/master/README.md',
            },
            {
                'name' : 'New Calculated Column GUI',
                'snippet' : [
                    'new_pandas_column_GUI()',
                ],
            },
            {
                'name' : 'Plot Pandas Data GUI',
                'snippet' : [
                    'plot_pandas_GUI()',
                ],
            },

        ]
    }
}
);
