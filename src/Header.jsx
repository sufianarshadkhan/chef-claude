import chefClaudeLogo from '/src/assets/chef-logo.jpg' 
export default function Header(){
    return (
        <header className="header">
            <div className="img-container">
                <img src={chefClaudeLogo} alt="Chef Claude" className="nav-logo"/>
            </div>
            <h4 className="title">Chef Claude</h4>
        </header>
    );
}