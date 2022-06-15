import { useMoralis } from "react-moralis"
import { useEffect } from "react"

function ManualHeader() {

    const { enableWeb3, account } = useMoralis()

    return(
        <div>
            {account ? () : (<button onClick={aync () => {await enableWeb3()}}>
                Connect
            </button>)}
        </div>
    )
}

export default ManualHeader