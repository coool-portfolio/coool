import React from "react";
import IndexCard from "../components/index/IndexCard";

function Index({ projects, status }) {
	return (
		<>
			{!status &&
				<div>
					<IndexCard
						projects={projects}
					/>
				</div>
			}
		</>
	);
}

export default Index;
