import React from 'react'
import Hero from './Hero'
import Bags from './Bags'
import ProductBuilder from './ProductBuilder'
import ProductWork from './ProductWork'
import CustomProd from './CustomProd'
import KRProd from './KRProd'
import GloabalBrand from './GloabalBrand'
import TrustKr from './TrustKR'
import FAQ from './FAQ'
import ReqDemo from './ReqDemo'
import Footer from './Footer'

export default function Dashboard() {
  return (
    <>
     <Hero/>
     <Bags/>
     <ProductBuilder/>
     <ProductWork/>
     <CustomProd/>
     <KRProd/>
     <GloabalBrand/>
     <TrustKr/>
     <FAQ/>
     <ReqDemo/>
     <Footer/>
    </>
  )
}
