import { Asset } from "@/types/asset";
import Image from "next/image";
import Link from "next/link";

export interface CardProps {
	/** Title */
	title: string;
	/** Description */
	description: string;
	/** Option: Link URL */
	href: string;
	/** Image position type */
	imagePosition?: "top" | "left";
	/** Option: Image */
	asset?: Asset;
}

export default function Card(props: CardProps) {
	const { title, description, href, imagePosition, asset } = props;
	const imagePositionClassName = imagePosition || "top";

	return (
		<div className={`component card ${imagePositionClassName}`}>
			<Link href={href}>
				{asset && (
					<Image
						src={asset.url}
						alt={asset.alt}
						width={asset.width}
						height={asset.height}
					/>
				)}
				<div className="p-4 flex-1">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</Link>
		</div>
	);
}
