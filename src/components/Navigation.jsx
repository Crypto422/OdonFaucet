import React, { useContext } from "react";
import { FaucetContext } from "../context/FaucetContext";
import { shortenAddress } from "../utils/shortenAddress";

export default function Navigation() {
  const { requestAccount, account } = useContext(FaucetContext);
  return (
    <div>
      <div className="flex absolute right-5 top-5">
        <a
          rel="noopenner noreferrer"
          target="_blank"
          href="https://testnet.bscscan.com/token/0xd9D905400b444732B6b47Df12735f9253e44DA06"
          className="hover:scale-125 transition duration-100 text-xl text-black font-medium select-none cursor-pointer "
        >
          Contract
        </a>
        {!account ? (
          <div
            onClick={() => requestAccount()}
            className="hover:scale-125 transition mx-8 text-xl text-black font-medium select-none cursor-pointer"
          >
            Connect Wallet
          </div>
        ) : (
          <a
            rel="noopenner noreferrer"
            target="_blank"
            href={"https://testnet.bscscan.com/address/" + account}
            className="hover:scale-125 transition mx-8 text-xl text-black font-medium select-none cursor-pointer"
          >
            {shortenAddress(account)}
          </a>
        )}
      </div>
    </div>
  );
}
