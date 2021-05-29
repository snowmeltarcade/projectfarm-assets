import os
import shutil
import platform
import argparse
import subprocess

pythonPath = shutil.which("python3")

def configureArguments():
    parser = argparse.ArgumentParser()
    parser.add_argument("-p", "--path", action="store", required=True, help="path to project")
    args = parser.parse_args()

    return args


def runCmd(cmd, cwd=None):
    print(f"Running command: {cmd}")
    subprocess.run(cmd, cwd=cwd)


def installData(installPath):
    print(f"Install data to path: {installPath}")

    dataPath = os.path.join(os.getcwd(), "data")

    shutil.copytree(dataPath, installPath, dirs_exist_ok=True)

    print("Installed data.")


print("Installing all assets...")

args = configureArguments()

installPath = os.path.join(args.path, "data")

installData(installPath)

print("Installed all assets.")