import React, { useState, useEffect } from 'react';


function CheckoutMain() {
    return (
        <>

            <div>
                <form action="/pagamento" method="post">
                    <h2>Informações do Comprador</h2>

                    <button type="submit">Finalizar Compra</button>
                </form>
            </div>
        </>
    )

}

export default CheckoutMain