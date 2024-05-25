import { Copyright } from "@material-ui/icons";
const Footer = () => {
  return (
    <>

    <footer className="inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#4ACEFF_100%)]">
      <div className="grid justify-center text-center py-10">
      <h2 className="text-3xl font-semibold max-w-screen-xl mt-8 tracking-wider">ALLRECIPES</h2>
      <p className="font-medium tracking-wide">{<Copyright />} Copyright 2024.  All rights reserved.</p>
      <p className="font-medium tracking-wide">Made by C02623-Alessandro Díaz</p>
      </div>
    </footer>
    
    </>
  )
}

export default Footer;