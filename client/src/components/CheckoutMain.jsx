import React, { useState, useEffect } from 'react';
import axios from 'axios';


function CheckoutMain() {
    return (
        <>
            <div>
                <form action="/checkout/pagamento" method="post">
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )

}

export default CheckoutMain