import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../../pages/board/Home";
import Join from "../../pages/board/Join";
import Login from "../../pages/board/Login";
import PostWrite from "../../pages/board/PostWrite";
import JoinSuccess from "../../pages/board/JoinSuccess";
import "../../assets/styles/layout/router.scss";
import MyPageEdit from "../../pages/board/MyPageEdit";
import ContentsViewer from "../board/ContentsViewer";
import Search from "../../pages/board/Search";
import Product from "../shop/product/Product";
import Products from "../shop/product/Products";
import ShopMain from "../../pages/shop/ShopMain";
import Cart from "../../pages/shop/order/Cart";
import ProductDetail from "../../pages/shop/product/ProductDetail";
import SellerItemResigter from "../shop/seller/SellerItemResgister";
import DeliverInfo from "../../pages/shop/order/DeliverInfo";
import Admin from "../../pages/shop/admin/Admin";
import SellerRegister from "../../pages/shop/admin/SellerRegister";
import Information from "./Information";
import AllProduct from "../../pages/shop/product/AllProduct";
import SellerMain from "../../pages/shop/seller/SellerMain"
import SellerItemList from "../shop/seller/SellerItemList";
import MyPage from "../common/MyPage";
import SellerQnA from "../shop/seller/SellerQnA";
import ScrollToTop from "../../utils/ScrollToTop";

const Router = (props) => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <div className="outer-container">
                <Header reload={props.reload} setReload={props.setReload}/>
                <div className="inner-container">
                    <Routes>
                        <Route path="/" element={<Home isAuth={props.isAuth}/>}/>
                        <Route path="/:category" element={<Home isAuth={props.isAuth}/>}/>

                        {/*<Route path="/item/:itemId" element={<ItemDetail/>}/>*/}
                        {/*<Route path="/test" element={<Test/>}/> /!*라우터 사용 예시*!/*/}
                        {/*<Route path="/best" element={<Best/>}/>*/}
                        {/*<Route path="/new" element={<New/>}/>*/}
                        <Route path="/join" element={<Join/>}/>
                        <Route path="/login" element={<Login reload={props.reload} setReload={props.setReload}/>}/>
                        <Route path="/post/write" element={<PostWrite/>}/>
                        <Route path="/join/success" element={<Information case ="join" />}/>
                        <Route path="/mypage" element={<MyPage/>}/>

                        <Route path="/mypage/edit" element={<MyPageEdit/>}/>
                        <Route path="/:category/:post_id" element={<ContentsViewer/>}/>
                        <Route path="/search" element={<Search/>}/>

                        <Route path="/shop" element={<ShopMain/>}/>
                        <Route path="/shop/:category" element={<AllProduct/>}/>
                        <Route path="/shop/detail/:itemId" element={<ProductDetail/>}/>

                        <Route path="/cart" element={<Cart/>}/>

                        {/* 상품 등록, 수정 */}
                        <Route path="/seller/item/new" element={<SellerItemResigter/>}/>
                        <Route path="/seller/item/edit/:itemId" element={<SellerItemResigter/>}/>
                        <Route path="/seller" element={<SellerMain/>}/>
                        <Route path="/seller/qna" element={<SellerQnA/>}/>


                        {/* 테스트 */}
                        <Route path="/seller/item/list" element={<SellerItemList/>}/>

                        <Route path="/deliver" element={<DeliverInfo/>}/>
                        <Route path="/admin/:menu" element={<Admin/>}/>
                        <Route path="/seller/register" element={<SellerRegister/>}/>
                        <Route path="/seller/register/success" element={<Information case ="seller" />}/>

                    </Routes>
                </div>

                {/*{props.isAuth ? <WriteButton/> : null}*/}
                <Footer/>

            </div>
        </BrowserRouter>

    )
}

export default Router