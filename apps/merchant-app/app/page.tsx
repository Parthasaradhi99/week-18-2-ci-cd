"use client";

import { useBalance } from "@repo/store/balance";

export function() {
  const balance = useBalance();
  return <div>
    hi there {balance} user
    I have added another new change
    I have added third change
    I have added fourth change
    I have added fifth change
    I have added sixth change
  </div>
}