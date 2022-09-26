import React from "react";
export default function Todolist(props) {
    return (
        <>
            <div className=" flex text-left items-center">
        <ol className="ml-[16rem]">
                <li className="text-purple-600 font-bold text-lg font-cursive w-[30rem] my-2 ml-[-15rem]">
                    <i onClick={props.onSelect(props.id)} className="bi bi-x-circle-fill text-violet-700 hover:text-red-700 mx-2 text-2xl"></i>
                    {props.text}
                </li>
                </ol>
            </div>
        </>
    );
}
