import Botao from "./Botao";

function App(){

	const botao = [
		{
			bot: "Tools",
			
		},
		{
			bot: "Pricing",
		},
    {
			bot: "Blog",
			
		},
    {
			bot: "About",
			
		},
    {
			bot: "Customers",
			
		},
	];

	return(

		<div className="cont"> 
			{
			botao.map((cons, cont) => {
					return <Botao key={cont}
							bot={cons.bot}
							
						/>;
				})
			}
	  </div>
	);
}

export default App;