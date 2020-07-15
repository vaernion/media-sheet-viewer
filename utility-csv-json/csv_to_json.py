import argparse
import json
import sys


def arguments():
    parser = argparse.ArgumentParser(
        description="CSV to JSON converter",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    parser.add_argument(
        "-i",
        "--input",
        metavar="PATH",
        help="File to read CSV from",
        type=str,
        required=True,
    )
    parser.add_argument(
        "-o",
        "--output",
        metavar="PATH",
        help="File to write JSON to (will overwrite existing)",
        required=True,
        type=str,
    )
    parser.add_argument(
        "-s", "--separator", help="Field separator", type=str, default=";",
    )
    parser.add_argument(
        "-f,",
        "--fields",
        help="Comma separated headers, will use first line in file if not supplied",
        type=str,
    )
    parser.add_argument(
        "--skip",
        metavar="LINES",
        help="Start reading after a number of lines",
        type=int,
        default=0,
    )
    return parser.parse_args()


def readFile(path, skip):
    try:
        with open(path, "r", encoding="utf-8") as f:
            string = f.read()
    except IOError as e:
        print(f"IOError: {e}")
        sys.exit(1)
    else:
        return string.split("\n", skip)[-1] if skip else string


def csvParser(csv, args):
    data = []
    lines = csv.splitlines()

    # get rid of BOM
    if lines[0][0] == "\ufeff":
        lines[0] = lines[0].replace("\ufeff", "")

    headers = args.fields.split(",") if args.fields else lines[0].split(args.separator)
    print("headers", headers)

    try:
        for i, line in enumerate(lines):
            if i == 0 and not args.fields:  # don't include headers
                continue
            fields = line.split(args.separator)
            record = {}
            for j, header in enumerate(headers):
                record[header] = fields[j]
            data.append(record)
    except IndexError as e:
        print(f"IndexError: {e}\nCSV file has missing fields on line {i+1}")
        sys.exit(1)
    else:
        return data


def writeJson(data, outPath):
    try:
        jsonData = json.dumps(data, indent=2, ensure_ascii=False)
        with open(outPath, "w", encoding="utf-8") as f:
            f.write(jsonData)
            print(f"{len(data)} records saved to {outPath} length {len(jsonData)}")
    except IOError as e:
        print("IOError: {e}")
        sys.exit(1)


def main():
    args = arguments()
    print(f"separator: {args.separator} skip: {args.skip}")
    print(f"input: {args.input}\noutput: {args.output}")

    csv = readFile(args.input, args.skip)
    data = csvParser(csv, args)
    writeJson(data, args.output)


if __name__ == "__main__":
    main()
