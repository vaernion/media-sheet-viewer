import argparse
import json
import os
import sys


def arguments():
    parser = argparse.ArgumentParser(
        description="Custom CSV to JSON converter for internal use",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    parser.add_argument("-i", "--input", help="input filename", type=str, required=True)
    parser.add_argument(
        "-o", "--output", help="output filename", type=str, required=True
    )
    parser.add_argument(
        "-s",
        "--separator",
        help="field separator",
        type=str,
        default=";",
        choices=[",", ";"],
    )
    return parser.parse_args()


def readFile(path):
    if os.path.isfile(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                string = f.read()
        except IOError as e:
            print(e)
        else:
            return string
    else:
        print(f"{path} not found")
        sys.exit(1)


def csvParser(csv, separator):
    data = []
    lines = csv.splitlines()

    # get rid of BOM
    if lines[0][0] == "\ufeff":
        lines[0] = lines[0].replace("\ufeff", "")

    headers = lines[0].split(separator)
    print("headers", headers)

    for i, line in enumerate(lines):
        if i == 0:
            continue
        fields = line.split(separator)
        record = {}
        for j, header in enumerate(headers):
            record[header] = fields[j]
        data.append(record)
    return data


def writeJson(outPath, data):
    try:
        jsonData = json.dumps(data, indent=2, ensure_ascii=False)
        with open(outPath, "w", encoding="utf-8") as f:
            f.write(jsonData)
            print(f"{len(data)} records saved to {outPath} length {len(jsonData)}")
    except IOError as e:
        print(e)


def main():
    args = arguments()
    print("input: ", args.input, "\noutput: ", args.output)

    csv = readFile(args.input)
    data = csvParser(csv, args.separator)
    writeJson(args.output, data)


if __name__ == "__main__":
    main()
