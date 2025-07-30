/**
 * 冒泡排序算法
 * 时间复杂度: O(n²)
 * 空间复杂度: O(1)
 * 稳定性: 稳定
 */

/**
 * 冒泡排序函数
 * @param {Array} arr - 需要排序的数组
 * @returns {Array} - 排序后的数组
 */
function bubbleSort(arr) {
    // 创建数组副本，避免修改原数组
    const array = [...arr];
    const length = array.length;
    
    // 外层循环控制排序轮数
    for (let i = 0; i < length - 1; i++) {
        // 设置标志位，如果一轮中没有交换，说明已经有序
        let swapped = false;
        
        // 内层循环进行相邻元素比较和交换
        for (let j = 0; j < length - 1 - i; j++) {
            // 如果前一个元素大于后一个元素，则交换
            if (array[j] > array[j + 1]) {
                // 使用解构赋值进行交换
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }
        
        // 如果这一轮没有发生交换，说明数组已经有序，可以提前退出
        if (!swapped) {
            break;
        }
    }
    
    return array;
}

/**
 * 优化的冒泡排序函数（记录最后一次交换的位置）
 * @param {Array} arr - 需要排序的数组
 * @returns {Array} - 排序后的数组
 */
function optimizedBubbleSort(arr) {
    const array = [...arr];
    const length = array.length;
    
    // 记录最后一次交换的位置
    let lastExchangeIndex = 0;
    // 无序数列的边界，每次比较只需要比到这里
    let sortBorder = length - 1;
    
    for (let i = 0; i < length - 1; i++) {
        let swapped = false;
        
        for (let j = 0; j < sortBorder; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
                lastExchangeIndex = j;
            }
        }
        
        sortBorder = lastExchangeIndex;
        
        if (!swapped) {
            break;
        }
    }
    
    return array;
}

/**
 * 双向冒泡排序（鸡尾酒排序）
 * @param {Array} arr - 需要排序的数组
 * @returns {Array} - 排序后的数组
 */
function cocktailSort(arr) {
    const array = [...arr];
    const length = array.length;
    let left = 0;
    let right = length - 1;
    let swapped = true;
    
    while (swapped) {
        swapped = false;
        
        // 从左到右冒泡
        for (let i = left; i < right; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
        right--;
        
        if (!swapped) break;
        
        swapped = false;
        
        // 从右到左冒泡
        for (let i = right; i > left; i--) {
            if (array[i - 1] > array[i]) {
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
                swapped = true;
            }
        }
        left++;
    }
    
    return array;
}

// 测试函数
function testBubbleSort() {
    console.log('=== 冒泡排序测试 ===\n');
    
    // 测试用例
    const testCases = [
        [9, 8, 12, 34, 66, 77, 88, 11, 23],
        [5, 2, 4, 6, 1, 3],
        [1],
        [],
        [3, 3, 3, 3],
        [9, 8, 7, 6, 5, 4, 3, 2, 1],
        [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ];
    
    testCases.forEach((testCase, index) => {
        console.log(`测试用例 ${index + 1}:`);
        console.log(`原始数组: [${testCase}]`);
        
        const result1 = bubbleSort(testCase);
        console.log(`标准冒泡排序: [${result1}]`);
        
        const result2 = optimizedBubbleSort(testCase);
        console.log(`优化冒泡排序: [${result2}]`);
        
        const result3 = cocktailSort(testCase);
        console.log(`鸡尾酒排序: [${result3}]`);
        
        console.log('---');
    });

    const testCase = [9, 8, 12, 34, 66, 77, 88, 11, 23]
    // 对 testCase 数组进行标准冒泡排序，并将结果保存到 result1
    const result1 = bubbleSort(testCase);
    console.log(`标准冒泡排序: [${result1}]`);
    
    // 对 testCase 数组进行优化后的冒泡排序，并将结果保存到 result2
    const result2 = optimizedBubbleSort(testCase);
    // 输出优化冒泡排序后的结果
    console.log(`优化冒泡排序: [${result2}]`);

}

// 性能测试函数
function performanceTest() {
    console.log('\n=== 性能测试 ===\n');
    
    // 生成随机数组
    const generateRandomArray = (size) => {
        return Array.from({length: size}, () => Math.floor(Math.random() * 1000));
    };
    
    const testSizes = [100, 500, 1000];
    
    testSizes.forEach(size => {
        const testArray = generateRandomArray(size);
        console.log(`数组大小: ${size}`);
        
        // 测试标准冒泡排序
        const start1 = performance.now();
        bubbleSort(testArray);
        const end1 = performance.now();
        console.log(`标准冒泡排序耗时: ${(end1 - start1).toFixed(2)}ms`);
        
        // 测试优化冒泡排序
        const start2 = performance.now();
        optimizedBubbleSort(testArray);
        const end2 = performance.now();
        console.log(`优化冒泡排序耗时: ${(end2 - start2).toFixed(2)}ms`);
        
        // 测试鸡尾酒排序
        const start3 = performance.now();
        cocktailSort(testArray);
        const end3 = performance.now();
        console.log(`鸡尾酒排序耗时: ${(end3 - start3).toFixed(2)}ms`);
        
        console.log('---');
    });
}

// 如果直接运行此文件，则执行测试
if (typeof require !== 'undefined' && require.main === module) {
    testBubbleSort();
    performanceTest();
}

// 导出函数供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        bubbleSort,
        optimizedBubbleSort,
        cocktailSort
    };
} 