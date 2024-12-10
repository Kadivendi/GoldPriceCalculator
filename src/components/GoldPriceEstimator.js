import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const GoldPriceEstimator = () => {
  const [goldPurity, setGoldPurity] = useState(22);
  const [goldRate, setGoldRate] = useState(916);
  const [stoneType, setStoneType] = useState('');
  const [stoneWeight, setStoneWeight] = useState(0);
  const [stonePrice, setStonePrice] = useState(0);
  const [wastage, setWastage] = useState(14);
  const [makingCharges, setMakingCharges] = useState(250);
  const [additionalCharges, setAdditionalCharges] = useState('');

  const calculatePrice = () => {
    const grossWeight = stoneWeight / (1 - wastage / 100);
    const baseGoldValue = grossWeight * goldRate;
    const makingChargesValue = grossWeight * makingCharges;
    const totalPrice = baseGoldValue + makingChargesValue + stonePrice + additionalCharges;

    return {
      grossWeight: grossWeight.toFixed(2),
      baseGoldValue: baseGoldValue.toFixed(2),
      makingChargesValue: makingChargesValue.toFixed(2),
      stonePrice: stonePrice.toFixed(2),
      additionalCharges: additionalCharges.toFixed(2),
      totalPrice: totalPrice.toFixed(2)
    };
  };

  const { grossWeight, baseGoldValue, makingChargesValue, stonePrice, additionalCharges, totalPrice } = calculatePrice();

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Sai Akhila Jewellers - Gold Ornament Price Estimator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="goldPurity">Gold Purity (Karat):</label>
            <input
              type="number"
              id="goldPurity"
              value={goldPurity}
              onChange={(e) => setGoldPurity(parseFloat(e.target.value))}
              min={14}
              max={24}
              step={4}
            />
          </div>
          <div>
            <label htmlFor="goldRate">Gold Rate (916/KDM):</label>
            <input
              type="number"
              id="goldRate"
              value={goldRate}
              onChange={(e) => setGoldRate(parseFloat(e.target.value))}
              min={0}
              step={1}
            />
          </div>
          <div>
            <label htmlFor="stoneType">Stone Type:</label>
            <input
              type="text"
              id="stoneType"
              value={stoneType}
              onChange={(e) => setStoneType(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="stoneWeight">Stone Weight (grams):</label>
            <input
              type="number"
              id="stoneWeight"
              value={stoneWeight}
              onChange={(e) => setStoneWeight(parseFloat(e.target.value))}
              min={0}
              step={0.1}
            />
          </div>
          <div>
            <label htmlFor="stonePrice">Stone Price:</label>
            <input
              type="number"
              id="stonePrice"
              value={stonePrice}
              onChange={(e) => setStonePrice(parseFloat(e.target.value))}
              min={0}
              step={1}
            />
          </div>
          <div>
            <label htmlFor="wastage">Wastage (%):</label>
            <input
              type="number"
              id="wastage"
              value={wastage}
              onChange={(e) => setWastage(parseFloat(e.target.value))}
              min={0}
              max={100}
              step={1}
            />
          </div>
          <div>
            <label htmlFor="makingCharges">Making Charges (₹/gram):</label>
            <input
              type="number"
              id="makingCharges"
              value={makingCharges}
              onChange={(e) => setMakingCharges(parseFloat(e.target.value))}
              min={0}
              step={10}
            />
          </div>
          <div>
            <label htmlFor="additionalCharges">Additional Charges:</label>
            <input
              type="text"
              id="additionalCharges"
              value={additionalCharges}
              onChange={(e) => setAdditionalCharges(parseFloat(e.target.value))}
            />
          </div>
        </div>

        <button onClick={calculatePrice} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Calculate Price
        </button>

        <div className="mt-4">
          <h3>Estimated Price</h3>
          <p>Gross Weight: {grossWeight} grams</p>
          <p>Base Gold Value: ₹{baseGoldValue}</p>
          <p>Making Charges: ₹{makingChargesValue}</p>
          <p>Stone Price: ₹{stonePrice}</p>
          <p>Additional Charges: ₹{additionalCharges}</p>
          <p>Total Estimated Price: ₹{totalPrice}</p>
        </div>

        <div className="mt-4">
          <img src="/api/placeholder/200/80" alt="Sai Akhila Jewellers Logo" />
          <p>Sai Akhila Jewellers</p>
          <p>MG Road, Suryapet</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoldPriceEstimator;