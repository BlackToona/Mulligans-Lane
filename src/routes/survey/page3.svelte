



<script>
	let items = 1;
	let equipment = ['Trailer Chemicals Rakehoe'];

	let menu = [
		'Trailer',
		'Chemicals',
		'Rakehoe'
	];

	function join(equipment) {
		if (equipment.length === 1) return equipment[0];
		return `${equipment.slice(0, -1).join(', ')} and ${equipment[equipment.length - 1]}`;
	}
</script>

<h2>Size</h2>

<label>
	<input type=radio bind:group={items} value={1}>
	One 
</label>

<label>
	<input type=radio bind:group={items} value={2}>
	Two 
</label>

<label>
	<input type=radio bind:group={items} value={3}>
	Three
</label>

<h2>Equipment</h2>

<select multiple bind:value={equipment}>
	{#each menu as equipment}
		<option value={equipment}>
			{equipment}
		</option>
	{/each}
</select>

{#if equipment.length === 0}
	<p>Please select at least one flavour</p>
{:else if equipment.length > items}
	<p>Can't order more flavours than items!</p>
{:else}
	<p>
		You have {items} {items === 1 ? 'item' : 'items'}
		of {join(equipment)}
	</p>
{/if}
