import { CreateModelForm } from "./CreateModelForm";

export default function Page() {
  return (
    <div>
      <div className="p-2 border-b-2 border-gray-200">
        <h1 className="text-xl">Create Model</h1>
      </div>
      <div className="p-2">
        <CreateModelForm />
      </div>
    </div>
  );
}
