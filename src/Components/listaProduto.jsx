export default function listaProdutos({produtos}){
    return(
     
            <ul className={styles.blocoLista}>
                {produtos.map(produto => (
                    <li className={styles.li} key={produto.id}>
                    <h2>{produto.title}</h2>
                    <p>{produto.description}</p>
                    <p>Preço: R${produto.price}</p>
                    <img src={produto.image} alt={produto.title} width={100} />
                    </li>
                ))}
            </ul>
    )
    }