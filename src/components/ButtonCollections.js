import DropdownButton, { POSITION_DROPDOWN } from "./DropdownButton";

export const ButtonCollections = ({ position = POSITION_DROPDOWN.bottom }) => {
  return (
    <DropdownButton
      title="COLLECTIONS"
      position={position}
      customContent={
        <div className="tk-filmotype-maxwell text-lg text-center">
          {/* TODO: nose que hará esto!! */}
          <div className="cursor-pointer hover:font-bold">Field to Healed</div>
          <div className="cursor-pointer text-gray-500 hover:font-bold">
            ΔFLORA
          </div>
        </div>
      }
    />
  );
};
