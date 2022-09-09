import React from "react";
import { User, DirectionDown } from "../../Assets/SvgIcon";
const Header = () => {
	return (
		<div>
			<div className="bg-gray-200 align-centerw-full justify-end h-20 flex w-">
				<div className="flex self-center justify-end">counter</div>

				<div className="flex self-center">
					<div className=" self-center">
						<DirectionDown />
					</div>
					<div className="mr-4">
						<User />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
