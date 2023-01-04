function arrayManipulation(n, queries) {
    // Initialize the prefix sum array
    let prefixSum = new Array(n + 1).fill(0);

    // Loop through the queries
    for(let i = 0; i < queries.length; i++) {
        let [initial, final, value] = queries[i];

        // Update the prefix sum array
        prefixSum[initial - 1] += value;
        prefixSum[final] -= value;
    }

    // Find the maximum value in the prefix sum array
    let max = 0;
    let current = 0;
    for(let i = 0; i < n; i++) {
        current += prefixSum[i];
        max = Math.max(max, current);
    }

    return max;
}