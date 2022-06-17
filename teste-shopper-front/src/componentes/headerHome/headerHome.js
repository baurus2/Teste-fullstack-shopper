import React, { useContext } from "react"
import {
    Conteiner,
    ShopperBotao,
    QuantidadeProdutos,
    PreçoTotal,
    ConteinerButton,
    ConteinerInfo
} from "./Styled"
import icon from "../../img/icon.png"
import GlobalStateContext from "../../global/GlobalContextState";

export const HeaderHome = () => {
    const { cart } = useContext(GlobalStateContext);

    const getTotalValue = () => {
        let totalValue = 0
        for (let cartItem of cart) {
            totalValue += cartItem.price * cartItem.qty_order
        }
        return totalValue.toFixed(2)
    }

    return (
        <Conteiner>
            <ConteinerButton>
                <ShopperBotao type="image" src={icon} />
            </ConteinerButton>
            <ConteinerInfo>
                <PreçoTotal>
                    {cart.length} {cart.length <= 1 ? "Produto" : "Produtos"}
                </PreçoTotal>
                <QuantidadeProdutos>
                    R$ {getTotalValue()}
                </QuantidadeProdutos>
            </ConteinerInfo>

        </Conteiner>
    )
}