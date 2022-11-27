from cairosvg import svg2png as s2p
from pathlib import Path
from rich.console import Console
from rich.progress import track
from os import listdir
from sys import argv, stderr, stdout

perr = Console(stderr=True)
pinfo = Console()

def main(args):
    """Converts all SVG files in a directory to PNG files. Also deletes the SVG files."""

    if not len(args) > 1:
        perr.log("Please provide a directory name (located in /assets/images).", style="bold red")
        return None
    # Get the directory to convert
    path = Path(__file__).parent.joinpath('assets').joinpath('images').joinpath(args[1].lower())

    for file in track(listdir(path), description="Scanning directory for .svg files ..."):
        p = path.joinpath(file)
        if p.is_file() and p.suffix == '.svg':
            s2p(bytestring = open(str(p), 'rb').read() , write_to=str(p.with_suffix('.png')))
            pinfo.log(f'Converted {p.name} to {p.with_suffix(".png").name}', style='green')
            p.unlink()

if __name__ == '__main__':
    main(argv)
