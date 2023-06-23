import { Checkbox } from "UI/Checkbox";
import { allPermissions } from "./const";
import React from "react";
import { areArraysEqual } from "utils/areArrayEqual";

interface PermissionCheckboxesProps {
  selectedPermissions?: string[];
  onCheckboxChange: (permission: string) => void;
  handleSelectAllChange?: () => void;
}

const PermissionCheckboxes: React.FC<PermissionCheckboxesProps> = ({
  selectedPermissions,
  onCheckboxChange,
  handleSelectAllChange,
}) => {
  return (
    <div className="rounded-2xl bg-default-5 py-3 shadow-default">
      <Checkbox
        onChange={handleSelectAllChange}
        checked={areArraysEqual(allPermissions, selectedPermissions || [])}
        className="cursor-pointer px-5 text-blue-grey-regular hover:bg-default-10"
        label="Все"
      />
      {allPermissions.map((permission) => {
        return (
          <Checkbox
            onChange={() => onCheckboxChange(permission)}
            checked={
              !!selectedPermissions?.find(
                (selectedPerms) => selectedPerms === permission
              )
            }
            className="cursor-pointer px-5 text-blue-grey-regular hover:bg-default-10"
            label={permission}
          />
        );
      })}
    </div>
  );
};

export default PermissionCheckboxes;
