import utilStyles from "../../styles/utils.module.scss";
import styles from "./[id].module.scss";

import { getAllItemsIds, getProjectData } from "../../lib/items";
import { useEffect } from "react";
import { useRouter } from "next/router";

export async function getStaticPaths() {
	try {
		const paths = await getAllItemsIds();
		return {
			paths,
			fallback: true,
		};
	} catch (err) {
		console.log(err);
	}
}

export async function getStaticProps({
	params,
	title,
	description,
	isSiteOn,
	link,
	image,
}) {
	try {
		const projectData = await getProjectData(
			params.id,
			title,
			description,
			isSiteOn,
			link,
			image
		);
		return {
			props: {
				projectData,
			},
		};
	} catch (err) {
		console.log(err);
	}
}

const Project = ({ projectData }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading</div>;
	}

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<>
			<div className={utilStyles.background}>
				<header className={`${utilStyles.container} ${styles.container}`}>
					<div className={styles.headerContent}>
						<small className={utilStyles.smallHeader}>project showcase</small>
						<h1>{projectData.title}</h1>
						<p className={utilStyles.homeParagraph}>
							{projectData.description}
						</p>
						{projectData.isSiteOn ? (
							<a
								href={projectData?.link}
								target="_blank"
								className={utilStyles.linkAnimation}
							>
								visit live site
							</a>
						) : null}
					</div>
				</header>
			</div>

			<main>
				<section className={styles.imageWrapper}>
					<img src={projectData.image} alt="Project Screen" />
				</section>
			</main>
		</>
	);
};

export default Project;
