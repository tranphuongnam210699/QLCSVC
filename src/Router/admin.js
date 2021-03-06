import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "../components/sidebar";
import HomeAdmin from "../layouts/home";
import Categories from "../layouts/categories";
import CategoriesAdd from "../layouts/categories/categoriesAdd";
import Account from "../layouts/account";
import AccountAdd from "../layouts/account/accountAdd";
import NhanVien from "../layouts/nhanVien";
import NhanVienAdd from "../layouts/nhanVien/nhanVienAdd";
import Facility from "../layouts/facility";
import FacilityAdd from "../layouts/facility/facilityAdd";
import AccountEdit from "../layouts/account/accountEdit";
import CategoriesEdit from "../layouts/categories/categoriesEdit";
import FacilityAddExcel from "../layouts/facility/facilityAddExcel";
import DonViTinh from "../layouts/donViTinh";
import DonViTinhAdd from "../layouts/donViTinh/donViTinhAdd";
import DonViQuanLy from "../layouts/donViQuanLy";
import FacilityDetail from "../layouts/facility/facilityDetail";
import FacilityNew from "../layouts/facility/facilityNew";
import FacilityEdit from "../layouts/facility/facilityEdit";
import DanhSachMuon from "../layouts/danhSachMuon";

export default class Admin extends Component {
    handleInputURL = (accountType, match) => {
        switch (accountType) {
            case ("1", "3"): // quyền admin
                return (
                    <Fragment>
                        <Route path={`${match}`} exact component={HomeAdmin} />
                        <Route
                            path={`${match}/categories`}
                            exact
                            component={Categories}
                        />
                        <Route
                            path={`${match}/categories-add`}
                            exact
                            component={CategoriesAdd}
                        />
                        <Route
                            path={`${match}/categories-edit`}
                            exact
                            component={CategoriesEdit}
                        />
                        <Route
                            path={`${match}/account`}
                            exact
                            component={Account}
                        />
                        <Route
                            path={`${match}/account-add`}
                            exact
                            component={AccountAdd}
                        />
                        <Route
                            path={`${match}/account-edit`}
                            exact
                            component={AccountEdit}
                        />
                        <Route
                            path={`${match}/nhanvien`}
                            exact
                            component={NhanVien}
                        />
                        <Route
                            path={`${match}/nhanvien-add`}
                            exact
                            component={NhanVienAdd}
                        />
                        <Route
                            path={`${match}/taisan`}
                            exact
                            component={Facility}
                        />
                        <Route
                            path={`${match}/taisan-new`}
                            exact
                            component={FacilityNew}
                        />
                        <Route
                            path={`${match}/taisan-add`}
                            exact
                            component={FacilityAdd}
                        />
                        <Route
                            path={`${match}/taisan-edit`}
                            exact
                            component={FacilityEdit}
                        />
                        <Route
                            path={`${match}/taisan-detail`}
                            exact
                            component={FacilityDetail}
                        />
                        <Route
                            path={`${match}/taisan-add-excel`}
                            exact
                            component={FacilityAddExcel}
                        />
                        <Route
                            path={`${match}/don-vi-tinh`}
                            exact
                            component={DonViTinh}
                        />
                        <Route
                            path={`${match}/don-vi-tinh-add`}
                            exact
                            component={DonViTinhAdd}
                        />
                        <Route
                            path={`${match}/don-vi-quan-ly`}
                            exact
                            component={DonViQuanLy}
                        />
                        <Route
                            path={`${match}/danh-sach-muon`}
                            exact
                            component={DanhSachMuon}
                        />
                    </Fragment>
                );
                break;
            default:
                break;
        }
    };
    render() {
        const match = this.props.match.path;
        const accountType = localStorage.getItem("accountType");
        return (
            <Fragment>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                    }}
                >
                    <div style={{ width: "17%" }}>
                        <SideBar />
                    </div>
                    <div
                        style={{
                            width: "83%",
                            backgroundColor: "#f0f0f0",
                            height: "100vh",
                        }}
                    >
                        {this.handleInputURL(accountType, match)}
                    </div>
                </div>
            </Fragment>
        );
    }
}
