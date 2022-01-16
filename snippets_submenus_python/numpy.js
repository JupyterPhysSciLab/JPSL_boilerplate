define([
    "require",
    "./numpy_ufuncs",
    "./numpy_polynomial",
], function (require, numpy_ufuncs, numpy_polynomial) {
    return {
        'name' : 'NumPy',
        'sub-menu' : [
            {
                'name' : 'Setup',
                'snippet' : [
                    'import numpy as np',
                ],
            },
            {
                'name' : 'Documentation',
                'external-link' : 'http://docs.scipy.org/doc/numpy/index.html',
            },
        ]
    }
}
);
