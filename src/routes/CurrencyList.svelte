<!-- CurrencyList.svelte -->

<script>
	import { currency } from './CurrencyArray.js';

	export let selectFrom = currency[0];
	export let selectTo = currency[111];

	let searchFrom = '';
	let searchTo = '';

	// Filtered arrays for the buttons
	$: filterFrom = currency.filter((code) =>
		code.toLowerCase().includes(searchFrom.toLowerCase())
	);
	$: filterTo = currency.filter((code) =>
		code.toLowerCase().includes(searchTo.toLowerCase())
	);

	function selectBtn(type, code) {
		if (type === `from`) {
			selectFrom = code;
		} else if (type === `to`) {
			selectTo = code;
		}
	}
</script>

<div class="flex flex-row md:gap-5 gap-2">
	<div class="group">
		<div
			class="flex flex-col h-12 md:w-48 w-[35vw] flex-wrap items-center justify-center gap-1 group-hover:border-green-500
	overflow-scroll overflow-x-hidden rounded-t-2xl border-2 border-green-900 bg-transparent text-xl font-bold text-white"
		>
			FROM
	</div>
		<!-- Search Bar for FROM -->
		<input
			type="text"
			bind:value={searchFrom}
			placeholder="Search Currency"
			class="md:w-48 w-[35vw] border-2 border-green-900 bg-transparent p-2 text-white text-center group-hover:border-green-500"
		/>
		<div
			class="flex md:h-[250px] h-[25vh] md:w-48 w-[35vw] flex-wrap items-center justify-center gap-1 group-hover:border-green-500
        overflow-scroll overflow-x-hidden rounded-b-2xl border-2 border-green-900 bg-transparent text-white"
		>
			{#each filterFrom as code}
            <button
            class="h-10 w-full border-blue-800 hover:bg-green-600 active:bg-green-400 active:border-2 active:border-green-600 hover:font-bold {selectFrom === code
                ? `bg-green-600 font-bold`
                : ``} transition-all duration-200"
            on:click={() => selectBtn(`from`, code)}>{code}</button
        >
			{/each}
		</div>
	</div>

	<div class="group">
		<p
			class="flex h-12 md:w-48 w-[35vw] flex-wrap items-center justify-center gap-1 group-hover:border-green-500
	overflow-scroll overflow-x-hidden rounded-t-2xl border-2 border-green-900 bg-transparent text-xl font-bold text-white"
		>
			TO
		</p>
		<!-- Search Bar for TO -->
		<input
			type="text"
			bind:value={searchTo}
			placeholder="Search Currency"
			class="md:w-48 w-[35vw] border-2 border-green-900 bg-transparent p-2 text-white text-center group-hover:border-green-500"
		/>
		<div
			class="flex md:h-[250px] h-[25vh] md:w-48 w-[35vw] flex-wrap items-center justify-center gap-1 group-hover:border-green-500
        overflow-scroll overflow-x-hidden rounded-b-2xl border-2 border-green-900 bg-transparent text-white"
		>
			{#each filterTo as code}
				<button
					class="h-10 w-full border-blue-800 hover:bg-green-600 active:bg-green-400 active:border-2 active:border-green-600 hover:font-bold {selectTo === code
						? `bg-green-600 font-bold`
						: ``} transition-all duration-200"
					on:click={() => selectBtn(`to`, code)}>{code}</button
				>
			{/each}
		</div>
	</div>
</div>
