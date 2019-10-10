import styled from 'styled-components';

export const Loader = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #ff3600;
    border-radius: 50%;
    margin: 200px auto;
    width: 120px;
    height: 120px;
    left: 0;
    right: 0;
    animation: spin 2s linear infinite;
    position: absolute;
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;