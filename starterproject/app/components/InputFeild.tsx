import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  onChange?: (value: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', placeholder, onChange }) => {
  return (
    <div className="flex flex-col mt-6 w-full text-base leading-relaxed max-w-[408px]">
      <label className="font-semibold text-slate-600" htmlFor={label.toLowerCase().replace(' ', '-')}>
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        id={label.toLowerCase().replace(' ', '-')}
        placeholder={placeholder}
        className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white rounded-lg border border-solid boreder-gray-500" 
      />
    </div>
  );
};

export default InputField;