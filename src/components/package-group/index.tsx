import {ChangeEvent, FC} from "react";
import {IPackage, Packages} from "../../services/api";
import styles from "./package-group.module.css"

interface IPackageGroupProps {
    packages: Packages,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const PackageGroup: FC<IPackageGroupProps> = ({packages, onChange}) => (
    <div className={styles.packageGroup}>
        {
            packages.map((pkg: IPackage, index: number) => (
                <div key={index}>
                    <input type="radio" name="package" onChange={onChange} defaultChecked={ (!index) } value={pkg.value}/>{pkg.label}
                </div>)
            )
        }
    </div>
);

export default PackageGroup;