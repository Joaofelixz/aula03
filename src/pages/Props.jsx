export default function Lista({produtos}){
return(
    <>  
    <h1></h1>
        <ul>
            {produtos.map(produto => (
                <li key={produto.id}>
                <h2>{produto.title}</h2>
                <p>{produto.description}</p>
                <p>Preço: R${produto.price}</p>
                <img src={produto.image} alt={produto.title} width={100} />
                </li>
            ))}
        </ul>
    </>
);
            }