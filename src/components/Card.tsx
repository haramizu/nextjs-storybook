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
	/** Card type */
	type?: "vertical" | "horizontal" | "noImage";
	/** Option: Image */
	asset?: Asset;
}

export default function Card(props: CardProps) {
	const { title, description, href, type, asset } = props;

	return (
		<div className={`component card ${type}`}>
			<Link href={href}>
				{asset && (
					<Image
						src={asset.url}
						alt={asset.alt}
						width={asset.width}
						height={asset.height}
						className="w-full h-48 object-cover"
					/>
				)}
				<div className="p-4">
					<h3 className="text-xl font-bold mb-2">{title}</h3>
					<p className="text-gray-700 text-base">{description}</p>
				</div>
			</Link>
		</div>
	);
}
