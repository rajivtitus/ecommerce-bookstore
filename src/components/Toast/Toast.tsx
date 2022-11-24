import { ReactElement, useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { ToastProps } from "../../utils/types";
import {
	wrapperClasses,
	iconClasses,
	getIcon,
	closeIcon,
	closeButtonClasses,
} from "./utils";
import useToast from "./useToast";

const Toast = (props: ToastProps): ReactElement => {
	let {
		type = "info",
		icon = "",
		message = "---",
		id,
		duration = 2000,
	} = props;
	icon = icon === "" ? getIcon(type) : icon;
	duration = typeof duration === "string" ? +duration : duration;
	const wrapperRef = useRef<HTMLDivElement>(null);
	const { removeToast } = useToast();

	//auto dismiss
	const dismissRef = useRef<ReturnType<typeof setTimeout>>();
	useEffect(() => {
		if (duration) {
			dismissRef.current = setTimeout(() => {
				removeToast(id, wrapperRef);
			}, duration);
		}
		return () => {
			clearTimeout(dismissRef.current);
		};
	}, []);

	// progressBar
	const progressBarRef = useRef<ReturnType<typeof setInterval>>();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const complete = 100;

		if (duration) {
			progressBarRef.current = setInterval(() => {
				if (progress < complete) {
					setProgress((prev) => prev + 1);
				} else {
					return;
				}
			}, duration / complete);
		}

		return () => {
			clearInterval(progressBarRef.current);
		};
	}, []);

	return (
		<div
			className={classNames(
				wrapperClasses[type],
				"flex justify-between items-center overflow-hidden rounded-md shadow-lg my-3 relative"
			)}
			ref={wrapperRef}
			role={"alert"}
		>
			<div className="absolute bottom-0 right-0 left-0 w-full h-1 bg-neutral-100">
				<span
					className="absolute bg-neutral-200 left-0 top-0 bottom-0 h-full"
					style={{ width: `${progress}%` }}
				/>
			</div>

			{icon && (
				<div className={classNames(iconClasses[type], "flex p-3")}>
					<div className="inline-flex justify-center items-center w-6 h-6">
						{icon}
					</div>
				</div>
			)}

			<div className="text-sm font-semibold flex-grow p-3">{message}</div>
			<button
				aria-label="Close"
				onClick={() => removeToast(id, wrapperRef)}
				className={classNames(closeButtonClasses)}
			>
				{closeIcon}
			</button>
		</div>
	);
};

export default Toast;
