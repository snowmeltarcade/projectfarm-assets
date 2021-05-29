# Project Farm Assets
The final assets used by Project Farm.

The files used to create these assets are stored in the [Project Farm Assets Dev](https://github.com/snowmeltarcade/projectfarm-assets-dev) repository.

This repo is automatically installed in the Project Farm [build script](https://github.com/snowmeltarcade/projectfarm/blob/main/build.py).

## Install
##### Correct as of 2021-05-29

Installing these assets requires the following dependencies:

* Python 3.6+

To install the assets, call the `install.py` script:

```
python3 install.py -p /path/to/projectfarm/
```

The assets will be installed in the `data` directory.

Note: When installing, any local changes will be overwritten. Please ensure any updated assets are first commited to this repository before installing.