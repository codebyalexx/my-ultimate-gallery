import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const LandingLanguageSelector = () => {
  return (
    <Select value="english">
      <SelectTrigger className="w-[160px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="english">English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
