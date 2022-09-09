import React from "react";

const LoginPage = () => {
	return (
		<div className="flex justify-center mt-20">
			<div className="flex flex-col">
				<form className="w-[400px] text-center border-2 border-gray-300  bg-gray-100">
					<p className=" font-bold mt-10 text-[40px] text-teal-500 ">Login</p>
					<p className=" mt-7 mb-2 text-md text-gray-400 text-justify ml-10 ">
						username
					</p>
					<input className="shadow px-4 w-[330px] h-9 rounded-full"></input>
					<p className=" mt-3 mb-2 text-md text-gray-400 text-justify ml-10">
						password
					</p>
					<input className=" shadow px-4 w-[330px] h-9 rounded-full mb-3"></input>
					<br />
					<div class="flex justify-between items-center mb-6">
						<div className="flex ">
							<div>
								<input
									type="checkbox"
									className="form-check-input shadow appearance-none h-4 w-4 border
									 border-gray-300 bg-white checked:bg-teal-500 checked:border-teal-600
									  rounded-[5px] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat 
									  bg-center bg-contain float-left mr-2 cursor-pointer ml-10"
									id="exampleCheck2"
								/>
								<label class="form-check-label text-gray-400 text-xs">
									Remember me
								</label>
							</div>

							<a className="text-blue-500 text-xs flex self-center ml-24 mr-10 cursor-pointer">
								Forget Password?
							</a>
						</div>
					</div>

					<br />
					<button className="mt-20 mb-20 bg-teal-500 text-white text-lg font-bold p-1 w-[310px] rounded-full">
						submit
					</button>
				</form>
			</div>
		</div>
	);
};
export default LoginPage;
