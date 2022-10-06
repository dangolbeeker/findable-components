import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react';
import { Button } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, ICellRendererParams } from 'ag-grid-community';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const ListView = ({
  documents,
  handleSelection,
  handleSelectDocument,
  searchFilterValue,
}: {
  documents: any[];
  handleSelection: (docIds: string[]) => void;
  handleSelectDocument: (document: any) => void;
  onDeleteDocument?: (document: any) => void;
  searchFilterValue?: string;
}) => {
  const gridRef = useRef<AgGridReact<any>>(null);
  const gridStyle = useMemo(
    () => ({
      height: '100%',
      width: '100%',
      minHeight: 300,
    }),
    []
  );

  const [rowData, setRowData] = useState<any[]>();
  const [columnDefs] = useState<ColDef[]>([
    {
      field: 'filename',
      headerName: 'TODO: ag-grid-lingui',
      minWidth: 370,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
      cellRenderer: (props: ICellRendererParams) => (
        <Button onClick={() => handleSelectDocument(props.data)}>
          {props.value}
        </Button>
      ),
    },
    {
      field: 'buildingCategory',
      headerName: 'TODO: ag-grid-lingui',
      minWidth: 370,
    },
    { field: 'tfmCode', headerName: 'TODO: ag-grid-lingui' },
    {
      field: 'updatedAt',
      headerName: 'TODO: ag-grid-lingui',
    },
    {
      field: 'size',
      headerName: 'TODO: ag-grid-lingui',
      getQuickFilterText: props =>
        `${(props.value / 1000 / 1000).toFixed(2)} MB`,
      cellRenderer: (props: ICellRendererParams) => (
        <p>{`${(props.value / 1000 / 1000).toFixed(2)} MB`}</p>
      ),
    },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      sortable: true,
      selectable: true,
      flex: 1,
      minWidth: 100,
      resizable: true,
      cellRenderer: (props: ICellRendererParams) => {
        //TODO: Use Text component from @Mantine/Core
        return <p>{props.value}</p>;
      },
    };
  }, []);

  const onGridReady = useCallback(() => {
    setRowData(documents);
  }, [documents]);

  const onSelectionChanged = useCallback(() => {
    var selectedRows = gridRef.current!.api.getSelectedRows();
    handleSelection(selectedRows.map(row => row.id));
  }, [handleSelection]);

  const updateQuickFilter = useCallback((vallooo: string) => {
    gridRef.current!.api.setQuickFilter(vallooo);
  }, []);

  useEffect(() => {
    if (!gridRef?.current?.api?.setQuickFilter) return;
    if (typeof searchFilterValue === 'undefined') return;

    updateQuickFilter(searchFilterValue);
  }, [searchFilterValue, gridRef, updateQuickFilter]);

  return (
    <div style={gridStyle} className="ag-theme-alpine">
      <AgGridReact<any>
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection="multiple"
        suppressRowClickSelection
        enableCellTextSelection
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
        onSelectionChanged={onSelectionChanged}
      />
    </div>
  );
};
