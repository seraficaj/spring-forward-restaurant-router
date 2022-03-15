import Header from "./Header";

function Layout({ children }) {
    return (
        <div className="container">
            <Header />
            <main>{children}</main>
        </div>
    );
}

export default Layout;
