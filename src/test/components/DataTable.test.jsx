/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import DataTable from "../../components/DataTable";

describe("DataTable", () => {
  const data = [
    { file: "file1", text: "text1", number: 1, hex: "#000000" },
    { file: "file2", text: "text2", number: 2, hex: "#ffffff" },
  ];

  it("renders the table headers correctly", () => {
    const { getByText } = render(<DataTable data={data} />);
    expect(getByText("File")).toBeInTheDocument();
    expect(getByText("Text")).toBeInTheDocument();
    expect(getByText("Number")).toBeInTheDocument();
    expect(getByText("Hex")).toBeInTheDocument();
  });

  it("renders the data correctly", () => {
    const { getByText } = render(<DataTable data={data} />);
    expect(getByText("file1")).toBeInTheDocument();
    expect(getByText("text1")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("#000000")).toBeInTheDocument();
    expect(getByText("file2")).toBeInTheDocument();
    expect(getByText("text2")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("#ffffff")).toBeInTheDocument();
  });
});
