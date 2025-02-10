'use client';

import TextFieldInput from "../atoms/TextFieldInput";

interface EditFieldsProps {
  name: string;
  email: string;
  totalAverageWeightRatings: string;
  numberOfRents: string;
  recentlyActive: string;
  changeInput: (e: string, type: string) => void;
}

export default function EditFields({
    name,
    email,
    totalAverageWeightRatings,
    numberOfRents,
    recentlyActive,
    changeInput
}: EditFieldsProps) {
  return (
    <>
      <TextFieldInput
        label="Name"
        type="text"
        value={name}
        onChange={(e) => changeInput(e.target.value, 'name')}
      />
      <TextFieldInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => changeInput(e.target.value, 'email')}
      />
      <TextFieldInput
        label="Total Average Weight Ratings"
        type="number"
        value={totalAverageWeightRatings}
        onChange={(e) => changeInput(e.target.value, 'totalAverageWeightRatings')}
      />
      <TextFieldInput
        label="Number of Rents"
        type="number"
        value={numberOfRents}
        onChange={(e) => changeInput(e.target.value, 'numberOfRents')}
      />
      <TextFieldInput
        label="Recently Active"
        type="number"
        value={recentlyActive}
        onChange={(e) => changeInput(e.target.value, 'recentlyActive')}
      />
    </>
  );
}
