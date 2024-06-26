import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React from 'react'

type Props = {}

function Page({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center bg-background overflow-y-hidden mt-24 ">
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary">Complete Payment</h1>
        <p className="text-muted-foreground">Enter your payment details</p>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block mb-1 text-sm font-medium text-primary-foreground">
            Card Number
          </label>
          <Input
            id="cardNumber"
            type="text"
            placeholder="4111 1111 1111 1111"
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expirationDate" className="block mb-1 text-sm font-medium text-primary-foreground">
              Expiration Date
            </label>
            <Input
              id="expirationDate"
              type="text"
              placeholder="MM/YY"
              className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block mb-1 text-sm font-medium text-primary-foreground">
              CVV
            </label>
            <Input
              id="cvv"
              type="text"
              placeholder="123"
              className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
        <div>
          <Button
            type="submit"
            className="w-full bg-[#DC4A2D] text-primary-foreground hover:bg-[hsl(0,71%,52%)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Pay $99.99
          </Button>
        </div>
      </form>
      <div className="mt-6 border-t border-muted pt-6">
        <div className="flex justify-between mb-2">
          <p className="text-muted-foreground">Subtotal</p>
          <p>$99.99</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-muted-foreground">Shipping</p>
          <p>$0.00</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-muted-foreground">Tax</p>
          <p>$0.00</p>
        </div>
        <Separator />
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-bold text-primary">Total</p>
          <p className="text-lg font-bold text-primary">$99.99</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page