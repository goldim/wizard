import {FC} from "react";
import {IPackage, Packages} from "../../services/api";
import styles from "./package-group.module.css"

interface IPackageGroupProps {
    packages: Packages
}

const PackageGroup: FC<IPackageGroupProps> = ({packages}) => (
    <div className={styles.packageGroup}>
        {
            packages.map((pkg: IPackage, index: number) => (
                <div key={index}><input type="radio" name="package" defaultChecked={ (!index) } value={pkg.value}/>
                    {pkg.label}
                </div>)
            )
        }
    </div>
);

export default PackageGroup;