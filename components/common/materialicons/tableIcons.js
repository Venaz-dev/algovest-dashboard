import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/KeyboardArrowDown";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef(function addIcon(props, ref) {
    return <AddBox {...props} ref={ref} />;
  }),
  Check: forwardRef(function CheckIcon(props, ref) {
    return <Check {...props} ref={ref} />;
  }),
  Clear: forwardRef(function ClearIcon(props, ref) {
    return <Clear {...props} ref={ref} />;
  }),
  Delete: forwardRef(function DeleteIcon(props, ref) {
    return <DeleteOutline {...props} ref={ref} />;
  }),
  DetailPanel: forwardRef(function DetailPanelIcon(props, ref) {
    return <ChevronRight {...props} ref={ref} />;
  }),
  Edit: forwardRef(function EditIcon(props, ref) {
    return <Edit {...props} ref={ref} />;
  }),
  Export: forwardRef(function ExportIcon(props, ref) {
    return <SaveAlt {...props} ref={ref} />;
  }),
  Filter: forwardRef(function FilterIcon(props, ref) {
    return <FilterList {...props} ref={ref} />;
  }),
  FirstPage: forwardRef(function FirstPageIcon(props, ref) {
    return <FirstPage {...props} ref={ref} />;
  }),
  LastPage: forwardRef(function LastPageIcon(props, ref) {
    return <LastPage {...props} ref={ref} />;
  }),
  NextPage: forwardRef(function NextPageIcon(props, ref) {
    return <ChevronRight {...props} ref={ref} />;
  }),
  PreviousPage: forwardRef(function PreviousPageIcon(props, ref) {
    return <ChevronLeft {...props} ref={ref} />;
  }),
  ResetSearch: forwardRef(function ResetSearchIcon(props, ref) {
    return <Clear {...props} ref={ref} />;
  }),
  Search: forwardRef(function SearchIcon(props, ref) {
    return <Search {...props} ref={ref} />;
  }),
  SortArrow: forwardRef(function SortArrowIcon(props, ref) {
    return <ArrowDownward {...props} ref={ref} />;
  }),
  ThirdStateCheck: forwardRef(function ThirdStateCheckIcon(props, ref) {
    return <Remove {...props} ref={ref} />;
  }),
  ViewColumn: forwardRef(function ViewColumnIcon(props, ref) {
    return <ViewColumn {...props} ref={ref} />;
  }),
};

export default tableIcons;
