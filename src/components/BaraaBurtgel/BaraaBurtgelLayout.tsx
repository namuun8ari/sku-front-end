import * as React from 'react';
import sku from '@/data/sku.json';
import { DataGridPremium, 
  GridToolbarContainer, 
  GridToolbarExport, 
  GridColDef, 
  GridRowsProp,
  GridRowSelectionModel} from '@mui/x-data-grid-premium';
import { ALL } from 'dns';


interface User {
  // Define the structure of your user object
  id: number;
  Code: string;
  Name: string;
  GroupId: number;
  TaxPrice: number;
  TaxCost: number;
  MinQty: number;
  OrderQty: number;
  IsCityTax: boolean;
  created_at: Date;
  updated_at: Date;
  SupplierId: number;
  role_id: number;
  IsUnionBarcode: number;
  CityTaxCategoryCode: null,
  is_trash: boolean;
  CategoryCode: null,
  MeasureCode: number;
  eBazaarItemId: number;
  Image: ImageData,
  GroupName: string;
  Manufacture: string;
  ManufactureId: number;
  Brand: string;
  BrandId: number;
  SubBrand: string;
  SubBrandId: number;
  Variant: string;
  Edition: number;
  Size: number;
  Type: string;
  Measure: string;
  // Add other properties as needed
}

const rows: GridRowsProp =  sku as User[]; //mur

const columns: GridColDef[] = [ //bagana
  { field: 'id', headerName: '№', width: 100 },
  {
    field: 'Code',
    headerName: 'Бар код',
    type: 'string',
    width: 150,
  },
  {
    field: 'Name',
    headerName: 'Барааны нэр',
    type: 'string',
    width: 250,
  },
  {
    field: 'GroupId',
    headerName: 'Бүлэг',
    type: 'string',
    width: 150,
  },
  {
    field: 'TaxPrice',
    headerName: 'Өртөг үнэ',
    type: 'number',
    width: 100,
  },
  {
    field: 'TaxCost',
    headerName: 'Зарах үнэ',
    type: 'number',
    width: 100,
  },
  {
    field: 'MinQty',
    headerName: 'Зохистой үлдэгдэл',
    type: 'number',
    width: 130,
  },
  {
    field: 'OrderQty',
    headerName: 'Захиалах тоо',
    type: 'number',
    width: 100,
  },
  {
    field: 'IsCityTax',
    headerName: 'НХАТ',
    type: 'boolean',
    width: 80,
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function ExcelExport() {
  const [selectionModel, setSelectionModel] = React.useState<GridRowSelectionModel>([]);


  const handleSelectionModelChange = (newSelectionModel: GridRowSelectionModel) => {
    setSelectionModel(newSelectionModel);
  };

  return (
    <div style={{ height: 500, width: '94%' }}>
      <DataGridPremium
        rows={rows}
        columns={columns}
        checkboxSelection
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={handleSelectionModelChange}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}